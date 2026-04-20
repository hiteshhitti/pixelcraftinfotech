import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function DataAnalyticsPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          Data Analytics, Data Science & AI Solutions
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Transform your raw data into powerful business insights. 
          Predict outcomes, automate processes, and gain a competitive edge with AI-driven solutions.
        </p>
      </section>

      {/* VALUE */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold">🚀 Revenue Growth</h3>
          <p className="text-muted-foreground mt-2">
            Identify new opportunities using predictive analytics
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">💰 Cost Reduction</h3>
          <p className="text-muted-foreground mt-2">
            Automate processes and eliminate inefficiencies
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">⚡ Competitive Edge</h3>
          <p className="text-muted-foreground mt-2">
            Real-time dashboards and AI-driven decisions
          </p>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Challenges We Solve
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Business Challenges</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Intense competition</li>
              <li>• Slow decision making</li>
              <li>• Market uncertainty</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Data Problems</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Data silos across departments</li>
              <li>• Delayed reporting</li>
              <li>• Inconsistent data quality</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Operational Issues</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Manual processes</li>
              <li>• Spreadsheet dependency</li>
              <li>• Lack of automation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 px-6 bg-card">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Solution
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-2">📊 Analytics</h3>
            <p className="text-muted-foreground">
              Dashboards, reporting, KPI tracking, and real-time insights.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-2">🧠 Data Science</h3>
            <p className="text-muted-foreground">
              Predictive models to forecast trends and behavior.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-2">🤖 Machine Learning</h3>
            <p className="text-muted-foreground">
              AI automation, anomaly detection, and recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Key Services
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <ul className="space-y-3 text-muted-foreground">
            <li>✔ Interactive dashboards (Power BI / Tableau)</li>
            <li>✔ KPI design & automation</li>
            <li>✔ Customer & revenue analytics</li>
            <li>✔ Operational analytics</li>
          </ul>

          <ul className="space-y-3 text-muted-foreground">
            <li>✔ Predictive modeling</li>
            <li>✔ Customer segmentation</li>
            <li>✔ Churn prediction</li>
            <li>✔ Fraud detection & automation</li>
          </ul>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-20 px-6 text-center bg-card">
        <h2 className="text-3xl font-bold mb-12">Business Impact</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div>🚀 8–20% Revenue Growth</div>
          <div>💰 15–40% Cost Reduction</div>
          <div>⚡ 5x Faster Decisions</div>
          <div>📈 35% Retention Boost</div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Real-World Use Cases
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Sales Forecasting</h3>
            <p className="text-muted-foreground">
              Improve accuracy up to 90% using AI models.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Customer Segmentation</h3>
            <p className="text-muted-foreground">
              Increase conversions with targeted campaigns.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Churn Prediction</h3>
            <p className="text-muted-foreground">
              Identify at-risk customers before they leave.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 bg-card">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Process
        </h2>

        <div className="grid md:grid-cols-6 gap-4 text-center">
          {[
            "Data Collection",
            "Data Cleaning",
            "Analysis",
            "Modeling",
            "Deployment",
            "Monitoring",
          ].map((step, i) => (
            <div key={i} className="p-4 border rounded-lg">
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Get a Free Data Strategy Consultation
        </h2>
        <p className="text-muted-foreground mb-6">
          Discover how your business can grow using data & AI.
        </p>

        <button className="px-6 py-3 bg-primary text-black rounded-lg">
          Book Free Call
        </button>
      </section>

      <Footer />
    </main>
  )
}