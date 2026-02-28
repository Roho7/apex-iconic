import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

console.log(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phoneNumber,
      serviceRequired,
      propertyType,
      budgetRange,
      preferredAreas,
      message,
    } = body;

    const serviceLabels: Record<string, string> = {
      buy: "Buy",
      sell: "Sell",
      rent: "Rent",
      "property-management": "Property Management",
    };

    const propertyLabels: Record<string, string> = {
      villa: "Villa",
      townhouse: "Townhouse",
      apartment: "Apartment",
      land: "Land",
      commercial: "Commercial",
    };

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            .content {
              background: #f8f9fa;
              padding: 30px;
              border-radius: 0 0 8px 8px;
            }
            .field {
              margin-bottom: 20px;
              background: white;
              padding: 15px;
              border-radius: 6px;
              border-left: 4px solid #667eea;
            }
            .field-label {
              font-weight: 600;
              color: #667eea;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            .field-value {
              color: #333;
              font-size: 16px;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 2px solid #e9ecef;
              text-align: center;
              color: #6c757d;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">New Client Registration</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Apex Iconic Property Brokerage</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">Full Name</div>
              <div class="field-value">${fullName}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></div>
            </div>
            
            <div class="field">
              <div class="field-label">Phone Number</div>
              <div class="field-value"><a href="tel:${phoneNumber}" style="color: #667eea; text-decoration: none;">${phoneNumber}</a></div>
            </div>
            
            <div class="field">
              <div class="field-label">Service Required</div>
              <div class="field-value">${serviceLabels[serviceRequired] || serviceRequired}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Property Type</div>
              <div class="field-value">${propertyLabels[propertyType] || propertyType}</div>
            </div>
            
            ${
              budgetRange
                ? `
            <div class="field">
              <div class="field-label">Budget Range</div>
              <div class="field-value">${budgetRange}</div>
            </div>
            `
                : ""
            }
            
            ${
              preferredAreas
                ? `
            <div class="field">
              <div class="field-label">Preferred Areas</div>
              <div class="field-value">${preferredAreas}</div>
            </div>
            `
                : ""
            }
            
            ${
              message
                ? `
            <div class="field">
              <div class="field-label">Message / Requirements</div>
              <div class="field-value" style="white-space: pre-wrap;">${message}</div>
            </div>
            `
                : ""
            }
            
            <div class="footer">
              <p><strong>Action Required:</strong> Follow up with this client within 24 hours.</p>
              <p style="margin: 5px 0 0 0;">Received on ${new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" })} (Dubai Time)</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Apex Iconic Alerts <onboarding@resend.dev>",
      to: ["apexiconic25@gmail.com"],
      subject: `New Client Registration: ${fullName} - ${serviceLabels[serviceRequired]}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
