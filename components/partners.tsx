"use client";

const partners = [
  { name: "Pronota", type: "", logo: "/logos/pronota.png" },
  { name: "iGXACT", type: "", logo: "/logos/igxact.png" }
  // { name: "AWS", type: "Training Partner", logo: "/logos/aws.png" },
  // { name: "Cisco", type: "Networking Partner", logo: "/logos/cisco.png" },
  // { name: "IBM", type: "Enterprise Partner", logo: "/logos/ibm.png" },
  // { name: "Oracle", type: "Database Partner", logo: "/logos/oracle.png" },
  // { name: "Salesforce", type: "CRM Partner", logo: "/logos/salesforce.png" },
  // { name: "SAP", type: "ERP Partner", logo: "/logos/sap.png" },
];

export function Partners() {
  return (
    <section id="partners" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
            Our Partners
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Collaborating with industry leaders
          </h2>
          <p className="text-muted-foreground text-lg">
            We&apos;ve partnered with top technology companies to bring you the most 
            relevant and up-to-date training programs.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="bg-card border border-border rounded-xl p-6 lg:p-8 
              hover:border-accent hover:shadow-lg hover:-translate-y-1 
              transition-all duration-300 text-center"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-12 object-contain mx-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                {partner.type}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-secondary rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Become a Partner
              </h3>
              <p className="text-muted-foreground text-lg">
                Interested in partnering with PixelCraft Infotech? We&apos;re always looking 
                for innovative organizations to collaborate with on training initiatives.
              </p>
            </div>
            <div className="lg:text-right">
              <button className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-colors">
                Partner With Us
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}