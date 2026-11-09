import React, { useState, useEffect, useRef, useMemo } from 'react';

// ============================================================================
// INLINE ENTERPRISE SVG ICONS (Zero external icon library dependencies)
// ============================================================================
const TerminalIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const CpuIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="15" x2="4" y2="15" />
  </svg>
);

const ShieldCheckIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
  </svg>
);

const ZapIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const DatabaseIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const LayersIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
  </svg>
);

const ActivityIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
);

const ChevronDownIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ============================================================================
// 1. FULL-SCREEN 3D PERSPECTIVE WAVE & RIPPLE CANVAS (Trending WebGL/Canvas2D)
// ============================================================================
function Wave3DCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Grid configuration for 3D perspective terrain mesh
    const cols = 42;
    const rows = 28;
    const spacingX = 48;
    const spacingZ = 46;
    const fov = 420;
    const camY = -190;
    const camZ = -220;

    let time = 0;
    const mouse = { x: width / 2, y: height * 0.45, targetX: width / 2, targetY: height * 0.45, speed: 0 };
    const clickRipples = [];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const handlePointerMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mouse.targetX = clientX;
      mouse.targetY = clientY;
    };

    const handlePointerDown = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      clickRipples.push({
        x: clientX,
        y: clientY,
        radius: 10,
        maxRadius: 280,
        intensity: 48,
        alpha: 1.0,
      });
      if (clickRipples.length > 5) clickRipples.shift();
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove);
    window.addEventListener('mousedown', handlePointerDown);

    // Main 3D Render Loop
    const render = () => {
      time += 0.016;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Deep ambient backdrop fade
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, width, height);

      // Radial mouse-glow spotlight in background
      const glowGrad = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, 450);
      glowGrad.addColorStop(0, 'rgba(16, 185, 129, 0.09)');
      glowGrad.addColorStop(0.4, 'rgba(6, 182, 212, 0.04)');
      glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // Update click ripple waves
      for (let i = clickRipples.length - 1; i >= 0; i--) {
        const r = clickRipples[i];
        r.radius += 5.5;
        r.alpha -= 0.018;
        if (r.alpha <= 0 || r.radius > r.maxRadius) {
          clickRipples.splice(i, 1);
        }
      }

      // 3D Point Mesh calculations
      const points = [];
      const originX = -((cols - 1) * spacingX) / 2;
      const originZ = 40;

      for (let r = 0; r < rows; r++) {
        points[r] = [];
        const z3d = originZ + r * spacingZ;

        for (let c = 0; c < cols; c++) {
          const x3d = originX + c * spacingX;

          // Harmonic multi-frequency 3D fluid wave function
          let y3d =
            Math.sin(c * 0.22 + time * 2.2) * 22 +
            Math.cos(r * 0.32 + time * 1.6) * 18 +
            Math.sin((c + r) * 0.16 + time * 1.8) * 14;

          // 3D Perspective Projection to screen coordinates
          const zRel = z3d - camZ;
          const scale = fov / Math.max(1, zRel);
          const screenX = width / 2 + x3d * scale;
          const screenY = height / 2 + (y3d - camY) * scale;

          // Dynamic mouse proximity wave displacement
          const dx = screenX - mouse.x;
          const dy = screenY - mouse.y;
          const distMouse = Math.sqrt(dx * dx + dy * dy);

          if (distMouse < 260) {
            const rippleForce = (1 - distMouse / 260) * 58;
            y3d += Math.sin(distMouse * 0.07 - time * 6.0) * rippleForce;
          }

          // Apply click ripples
          clickRipples.forEach((rip) => {
            const dRip = Math.hypot(screenX - rip.x, screenY - rip.y);
            if (Math.abs(dRip - rip.radius) < 40) {
              const factor = 1 - Math.abs(dRip - rip.radius) / 40;
              y3d -= factor * rip.intensity * rip.alpha;
            }
          });

          // Final projected coordinates after displacement
          const finalScreenX = width / 2 + x3d * scale;
          const finalScreenY = height / 2 + (y3d - camY) * scale;

          points[r][c] = {
            x: finalScreenX,
            y: finalScreenY,
            z: z3d,
            scale,
            distMouse,
            glow: Math.max(0, 1 - distMouse / 240),
          };
        }
      }

      // Draw horizontal spline curves with dynamic neon gradients
      for (let r = 0; r < rows; r++) {
        const rowDepthRatio = r / rows;
        const baseAlpha = 0.08 + rowDepthRatio * 0.28;

        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const pt = points[r][c];
          if (c === 0) ctx.moveTo(pt.x, pt.y);
          else {
            const prev = points[r][c - 1];
            const midX = (prev.x + pt.x) / 2;
            const midY = (prev.y + pt.y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);
          }
        }

        ctx.strokeStyle = `rgba(16, 185, 129, ${baseAlpha.toFixed(3)})`;
        ctx.lineWidth = 1.0 + rowDepthRatio * 0.8;
        ctx.stroke();
      }

      // Draw longitudinal cross-struts (every 2nd column for clean perspective)
      for (let c = 0; c < cols; c += 2) {
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          const pt = points[r][c];
          if (r === 0) ctx.moveTo(pt.x, pt.y);
          else {
            const prev = points[r - 1][c];
            ctx.lineTo(pt.x, pt.y);
          }
        }
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.11)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Draw glowing particle nodes at wave intersections near cursor
      for (let r = 0; r < rows; r += 2) {
        for (let c = 0; c < cols; c += 2) {
          const pt = points[r][c];
          if (pt.glow > 0.05) {
            const nodeRadius = 1.4 + pt.glow * 3.2;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, nodeRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(52, 211, 153, ${(0.3 + pt.glow * 0.7).toFixed(2)})`;
            ctx.shadowColor = '#10b981';
            ctx.shadowBlur = 12 * pt.glow;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mousedown', handlePointerDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
}

// ============================================================================
// 2. 3D PERSPECTIVE TILT CARD COMPONENT (Realistic Gyroscope & Specular Glare)
// ============================================================================
function Card3D({ children, className = "" }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [glare, setGlare] = useState({ opacity: 0, x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -8.5; // Max 8.5 deg tilt
    const rotY = ((x - centerX) / centerX) * 8.5;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-3px)`,
      transition: 'transform 0.08s ease-out',
    });

    setGlare({
      opacity: 0.28,
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
      transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
    });
    setGlare({ opacity: 0, x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Specular Radial Dynamic Glare */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.35) 0%, transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}

// ============================================================================
// 3. MAIN APPLICATION COMPONENT
// ============================================================================
export default function App() {
  const [activeBlueprint, setActiveBlueprint] = useState(0);
  const [blueprintTab, setBlueprintTab] = useState('flow'); // flow | code | metrics
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Dynamic ROI Calculator State
  const [teamSize, setTeamSize] = useState(6);
  const [hoursPerPerson, setHoursPerPerson] = useState(12);
  const [hourlyWage, setHourlyWage] = useState(38);

  // Scoping Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStack, setSelectedStack] = useState(['HubSpot', 'QuickBooks', 'PostgreSQL']);
  const [scopingForm, setScopingForm] = useState({
    name: '',
    email: '',
    bottleneck: '',
    tier: '10-Day Implementation Sprint ($1,500 Flat)',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Tech stack options for scoping
  const techStackList = [
    'HubSpot',
    'QuickBooks',
    'PostgreSQL',
    'Stripe',
    'Salesforce',
    'Slack',
    'Xero',
    'Shopify',
    'Google Sheets',
    'Custom REST API',
  ];

  // Dynamic ROI calculations
  const roi = useMemo(() => {
    const weeklyHours = teamSize * hoursPerPerson;
    const annualHours = weeklyHours * 52;
    const annualWaste = annualHours * hourlyWage;
    const sprintCost = 1500;
    const dailyLoss = annualWaste / 365;
    const paybackDays = dailyLoss > 0 ? Math.max(1, Math.round(sprintCost / dailyLoss)) : 10;
    const netSavings = Math.max(0, annualWaste - sprintCost);

    return {
      weeklyHours,
      annualHours: annualHours.toLocaleString(),
      annualWasteStr: annualWaste.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
      paybackDays,
      netSavingsStr: netSavings.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
    };
  }, [teamSize, hoursPerPerson, hourlyWage]);

  // Production Case Study Blueprints
  const caseStudies = [
    {
      id: "invoice-pipeline",
      title: "Asynchronous B2B Invoice & Document Extraction Pipeline",
      category: "Document Intelligence",
      badge: "Python 3.11 / FastAPI / Pydantic / Tesseract OCR / QuickBooks",
      impact: "18.5 hrs/week saved • 99.4% extraction accuracy",
      problem: "A mid-sized US logistics brokerage spent 22+ hours weekly manually transcribing carrier freight invoices into accounting ledgers. Typo errors, duplicate entries, and delayed approvals caused monthly overpayment leaks of $14,000+.",
      solution: "Engineered an asynchronous layout-aware invoice ingestion pipeline. Attachments are intercepted via webhooks, parsed with tabular OCR, and run through a deterministic Pydantic schema confirming line-item math (subtotal + surcharge == total). Approved invoices commit directly to the ledger; math mismatches trigger an interactive Slack review card for 1-click human override.",
      flow: [
        { stage: "01", name: "Inbound Hook", desc: "MIME-type validation & PDF byte stream isolation via S3 hooks." },
        { stage: "02", name: "Tabular OCR", desc: "Extracts multi-page table grids, vendor MC numbers & PO codes." },
        { stage: "03", name: "Deterministic Math Audit", desc: "Pydantic validator confirms line-item math matches agreed rate." },
        { stage: "04", name: "Ledger Commit", desc: "Reconciled records post to ERP; drift flags to on-call Slack channel." },
      ],
      metrics: [
        { label: "Data Entry Elimination", value: "96.4%" },
        { label: "Pipeline Latency", value: "3.4 Seconds" },
        { label: "Unpaid Math Errors Caught", value: "$22,400 / quarter" },
        { label: "Net Labor Saved", value: "$36,200 / year" },
      ],
      code: `# Production-grade layout-aware invoice extraction service
from fastapi import FastAPI, UploadFile, BackgroundTasks
from pydantic import BaseModel, Field, validator
import logging

class InvoicePayload(BaseModel):
    vendor_id: str
    po_reference: str
    line_total: float = Field(gt=0)
    surcharges: float = Field(ge=0)
    billed_sum: float = Field(gt=0)

    @validator("billed_sum")
    def verify_mathematical_integrity(cls, v, values):
        computed = round(values.get("line_total", 0) + values.get("surcharges", 0), 2)
        if round(v, 2) != computed:
            raise ValueError(f"Math discrepancy: billed {v} != computed {computed}")
        return v

@app.post("/v1/pipeline/invoices")
async def process_carrier_invoice(file: UploadFile, bg: BackgroundTasks):
    raw_stream = await file.read()
    extracted = await ocr_service.extract_table(raw_stream)
    
    try:
        validated = InvoicePayload(**extracted)
        bg.add_task(ledger_client.post_transaction, validated)
        return {"status": "reconciled", "code": 200}
    except Exception as err:
        logging.warning("Invoice math mismatch detected. Routing to Dead-Letter Queue.")
        await alerting.dispatch_slack_audit_card(extracted, error=str(err))
        return {"status": "quarantined_for_review", "code": 422}`,
    },
    {
      id: "lead-engine",
      title: "High-Velocity Speed-to-Lead Webhook & Enrichment Engine",
      category: "Event-Driven Ingestion",
      badge: "FastAPI / DNS MX Check / Clearbit / HubSpot API / Slack",
      impact: "Response time reduced from 4.2 hrs to 32 seconds",
      problem: "An enterprise B2B software sales team suffered an average 4-hour delay before contacting high-intent enterprise prospects who submitted demo requests. Over 35% of qualified leads booked with faster competitors before reps responded.",
      solution: "Engineered an asynchronous event-driven webhook ingestion router. Inbound form submissions undergo instantaneous MX record validation (purging disposable mailboxes), firmographic data enrichment (headcount, revenue tier), and automated scoring. Tier-1 VIP leads instantly post an interactive Slack action card to the on-duty sales director with pre-drafted scheduling links.",
      flow: [
        { stage: "01", name: "Form Intercept", desc: "Lightweight webhook listener bypasses CRM polling latency." },
        { stage: "02", name: "DNS & MX Verification", desc: "Discards burner emails; confirms legitimate corporate domain." },
        { stage: "03", name: "Firmographic Enrichment", desc: "Fetches headcount, technology stack, and capital stage." },
        { stage: "04", name: "Slack Action Dispatch", desc: "AE receives live card with pre-drafted 1-click booking link." },
      ],
      metrics: [
        { label: "Speed to AE Contact", value: "32 Seconds" },
        { label: "Close Rate Uplift", value: "+38%" },
        { label: "Spam Inbound Purged", value: "100% Automated" },
        { label: "Manual Routing Time", value: "0 Minutes" },
      ],
      code: `async def route_enterprise_prospect(raw_submission: dict):
    # Enforce signal integrity & discard disposable mailboxes
    prospect = ProspectSchema(**raw_submission)
    is_valid_domain = await dns_checker.verify_mx_records(prospect.email.domain)
    if not is_valid_domain:
        return {"status": "rejected_disposable_domain"}

    # Dynamic firmographic enrichment
    meta = await enrichment_client.fetch_company_meta(prospect.email.domain)
    score_tier = "TIER_1_VIP" if meta.employee_count >= 50 else "STANDARD"

    await crm_gateway.upsert_lead(prospect, tier=score_tier)
    
    # Push immediate interactive action card to on-duty sales rep
    if score_tier == "TIER_1_VIP":
        await slack.post_action_card(
            channel="#vip-inbound-leads",
            headline=f"🚨 Inbound Tier-1: {prospect.name} ({meta.company_name})",
            action_url=prospect.calendar_instant_link
        )`,
    },
    {
      id: "reconciliation-worker",
      title: "Resilient Multi-Platform Financial Reconciliation Engine",
      category: "Financial Reliability",
      badge: "PostgreSQL / Redis / Tenacity Retries / Stripe API",
      impact: "Eliminated silent monthly billing drift across 3 platforms",
      problem: "Discrepancies between Stripe subscription events, internal PostgreSQL user states, and customer success databases created phantom accounts and required 2 full days of manual accounting triage at every month-end close.",
      solution: "Engineered an idempotent scheduled reconciler. Employs distributed locks via Redis to eliminate race conditions across container clusters, scans Stripe transaction logs with exponential retry backoffs, detects ledger drift, and generates self-healing corrective patches with cryptographic audit hashes.",
      flow: [
        { stage: "01", name: "Distributed Lock", desc: "Redis mutex prevents concurrent execution across containers." },
        { stage: "02", name: "Transaction Differencing", desc: "Compares external gateway event logs against PostgreSQL state." },
        { stage: "03", name: "Automated Self-Healing", desc: "Reconciles subscription status or marks account for investigation." },
        { stage: "04", name: "Executive Audit Proof", desc: "Generates daily zero-drift ledger digest for leadership." },
      ],
      metrics: [
        { label: "Monthly Audit Time", value: "16 hrs down to 0" },
        { label: "Silent Billing Drift", value: "0% Tolerated" },
        { label: "Backoff Retry Resilience", value: "100% on 429/503" },
        { label: "Data Integrity SLA", value: "99.99%" },
      ],
      code: `@retry(stop=stop_after_attempt(5), wait=wait_exponential(multiplier=1, min=2, max=10))
async def execute_idempotent_reconciliation(target_date: date):
    # Distributed Redis lock prevents concurrent execution across containers
    async with redis_pool.lock("mutex:financial_recon_worker", timeout=180):
        unreconciled_events = await stripe_gateway.fetch_charges(target_date)
        internal_records = await db.fetch_all_subscriptions(target_date)

        discrepancies = diff_engine.find_ledger_drift(unreconciled_events, internal_records)
        
        for drift in discrepancies:
            logging.info(f"Self-healing ledger mismatch: {drift.charge_id}")
            await db.apply_corrective_transaction(drift)

        await notification_service.send_cfo_audit_digest(
            date=target_date,
            total_reconciled=len(unreconciled_events),
            drift_healed=len(discrepancies)
        )`,
    },
  ];

  // Enterprise FAQs
  const faqs = [
    {
      q: "Why shouldn't we just hire someone to click buttons in Zapier or Make?",
      a: "No-code platforms are great for simple 2-step notifications, but they fail silently when an API schema changes, when a rate limit (HTTP 429) hits, or when an invalid PDF is uploaded. They lack Pydantic schema validation, atomic database transactions, dead-letter recovery queues, and staging sandboxes. I build deterministic custom microservices that run reliably without leaking monthly task subscription costs ($500+/mo on Zapier) and without dropping customer records.",
    },
    {
      q: "How do you guarantee our customer data & financial records stay secure?",
      a: "We adhere to strict data-minimization principles: zero client personal data (PII) is stored on external developer servers. Deployments occur either directly within your own cloud infrastructure (AWS/GCP/Supabase) or on isolated zero-trust containers using client-managed API keys. All webhooks operate under TLS 1.3 encryption, and environment secrets remain completely under your control.",
    },
    {
      q: "How does a remote engineer in India support our US or European business hours?",
      a: "This is a major operational advantage for high-growth teams. We conduct calls during synchronous crossover hours (US mornings / European afternoons). While your local team sleeps, maintenance, deep architecture building, and test runs are executed overnight. Your systems are audited, resolved, and deployed before your workday starts.",
    },
    {
      q: "What happens if a third-party vendor updates their API or breaks a webhook?",
      a: "Every pipeline is architected defensively with automated health checks and alerting webhooks that catch upstream API schema changes before they corrupt your database. Furthermore, all 10-Day Implementation Sprints include a comprehensive 14-day post-launch warranty with zero-cost bug fixes, followed by an optional $500/mo ongoing systems reliability retainer.",
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('tamanna4work@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleStackToggle = (tech) => {
    if (selectedStack.includes(tech)) {
      setSelectedStack(selectedStack.filter((t) => t !== tech));
    } else {
      setSelectedStack([...selectedStack, tech]);
    }
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300 antialiased overflow-x-hidden">
      
      {/* 3D Wave & Ripple Background Canvas */}
      <Wave3DCanvas />

      {/* Cybernetic Grid Mask Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.14),transparent_75%)] z-0" />
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 z-0" />

      {/* ==================================================================== */}
      {/* NAVIGATION BAR                                                       */}
      {/* ==================================================================== */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-3 group">
            <span className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center font-mono text-emerald-400 font-bold group-hover:border-emerald-500/80 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
              T
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-zinc-100 group-hover:text-emerald-400 transition-colors">
                TAMANNA <span className="text-zinc-500">//</span> SYS.ENG
              </span>
              <span className="font-mono text-[9.5px] text-zinc-400 tracking-wider uppercase">
                B2B Systems &amp; Automation Architecture
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <a href="#hero" className="hover:text-emerald-400 transition-colors">// Overview</a>
            <a href="#staging" className="hover:text-emerald-400 transition-colors">// Staging Flow</a>
            <a href="#blueprints" className="hover:text-emerald-400 transition-colors">// Architecture</a>
            <a href="#calculator" className="hover:text-emerald-400 transition-colors">// ROI Engine</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">// Engagements</a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">// FAQs</a>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>1 Slot Open for US/EU Sprint</span>
            </div>
            <button
              onClick={() => { setFormSubmitted(false); setModalOpen(true); }}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)]"
            >
              Book Audit
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-zinc-100"
            aria-label="Toggle Navigation Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transform transition duration-200 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition duration-200 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-current transform transition duration-200 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950/95 border-b border-zinc-800 px-6 py-5 space-y-3 font-mono text-xs backdrop-blur-2xl">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-400 hover:text-emerald-400">// Overview</a>
            <a href="#staging" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-400 hover:text-emerald-400">// Staging Flow</a>
            <a href="#blueprints" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-400 hover:text-emerald-400">// Architecture</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-400 hover:text-emerald-400">// ROI Engine</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-400 hover:text-emerald-400">// Engagements</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-400 hover:text-emerald-400">// FAQs</a>
            <button
              onClick={() => { setMobileMenuOpen(false); setFormSubmitted(false); setModalOpen(true); }}
              className="w-full mt-2 py-2 rounded-lg text-xs font-mono font-bold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors text-center"
            >
              Book Bottleneck Audit →
            </button>
          </div>
        )}
      </nav>

      {/* ==================================================================== */}
      {/* HERO SECTION                                                         */}
      {/* ==================================================================== */}
      <section id="hero" className="relative z-10 pt-16 pb-20 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 shadow-inner">
            <CpuIcon className="w-4 h-4 text-emerald-400" />
            <span className="text-zinc-200 font-semibold tracking-wider">
              ENTERPRISE SYSTEMS INTEGRATOR &amp; WORKFLOW ARCHITECT
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-100 leading-[1.12]">
            I Engineer Fault-Tolerant Automation Pipelines That Save High-Growth Teams{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              20+ Hours Every Week.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Eliminating back-office administrative drag for US and European companies. Applying hardware and ECE signal discipline to business software: strict schema validation, idempotent retries, and zero silent data loss.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3 font-mono text-xs">
            <button
              onClick={() => { setFormSubmitted(false); setModalOpen(true); }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold transition-all shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:scale-[1.02]"
            >
              <span>Launch Live Architecture Audit</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>

            <a
              href="#staging"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/80 transition-all hover:scale-[1.02]"
            >
              <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
              <span>Explore Staging Guarantee</span>
            </a>
          </div>

          <div className="pt-2 flex items-center justify-center gap-6 text-xs font-mono text-zinc-400">
            <a
              href="https://github.com/tam-stack-spec17"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>github.com/tam-stack-spec17</span>
            </a>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              $0 Upfront Risk Model
            </span>
          </div>

        </div>

        {/* Live Proof Metrics Ticker Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card3D className="border border-zinc-800/80 bg-zinc-900/70 backdrop-blur p-5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">38ms</div>
            <div className="text-xs text-zinc-400 mt-1">Median Pipeline Latency</div>
          </Card3D>

          <Card3D className="border border-zinc-800/80 bg-zinc-900/70 backdrop-blur p-5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400">99.98%</div>
            <div className="text-xs text-zinc-400 mt-1">Webhook Uptime SLA</div>
          </Card3D>

          <Card3D className="border border-zinc-800/80 bg-zinc-900/70 backdrop-blur p-5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-teal-400">0% Risk</div>
            <div className="text-xs text-zinc-400 mt-1">Staging-First Guarantee</div>
          </Card3D>

          <Card3D className="border border-zinc-800/80 bg-zinc-900/70 backdrop-blur p-5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-purple-400">$280k+</div>
            <div className="text-xs text-zinc-400 mt-1">Annual Payroll Reclaimed</div>
          </Card3D>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* THE ZERO-RISK STAGING PROTOCOL (ENTERPRISE TRUST BUILDER)            */}
      {/* ==================================================================== */}
      <section id="staging" className="relative z-10 py-20 bg-zinc-900/50 border-y border-zinc-800/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-2">
              <ShieldCheckIcon className="w-4 h-4" />
              The Enterprise Trust Builder
            </h2>
            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
              The Zero-Risk Staging Protocol
            </p>
            <p className="text-sm text-zinc-400 mt-2">
              Enterprise clients don't pay for promises or hourly guesswork. You review the working system running accurately on mock test files in a private staging sandbox before a single dollar is billed.
            </p>
          </div>

          {/* 4-Step Flowchart Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <Card3D className="border border-zinc-800 bg-zinc-950 p-6 space-y-3">
              <div className="flex items-center justify-between font-mono">
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider">PHASE 01</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-zinc-800 text-zinc-300">DAY 01</span>
              </div>
              <h3 className="text-base font-bold text-zinc-100">Bottleneck Audit</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We identify your costliest manual task via a 20-minute async Loom or sync call, mapping out exact schemas and target systems.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-400 font-semibold">
                ✓ Free Architecture Map
              </div>
            </Card3D>

            <Card3D className="border border-zinc-800 bg-zinc-950 p-6 space-y-3">
              <div className="flex items-center justify-between font-mono">
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider">PHASE 02</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-zinc-800 text-zinc-300">DAYS 2–7</span>
              </div>
              <h3 className="text-base font-bold text-zinc-100">Sandboxed Staging Build</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                I build the pipeline in an isolated test environment using dummy data. No access to your live database or production keys is required.
              </p>
              <div className="pt-2 text-[11px] font-mono text-cyan-400 font-semibold">
                ✓ $0 Upfront Deposit
              </div>
            </Card3D>

            <Card3D className="border border-zinc-800 bg-zinc-950 p-6 space-y-3">
              <div className="flex items-center justify-between font-mono">
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider">PHASE 03</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-zinc-800 text-zinc-300">DAY 08</span>
              </div>
              <h3 className="text-base font-bold text-zinc-100">Live Verification Demo</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We test edge cases together on a 15-minute call. You watch sample files run through OCR, schema validation, and database updates in real time.
              </p>
              <div className="pt-2 text-[11px] font-mono text-teal-400 font-semibold">
                ✓ 100% Visual Proof
              </div>
            </Card3D>

            <Card3D className="border border-emerald-500/40 bg-zinc-950 p-6 space-y-3 shadow-[0_0_25px_rgba(16,185,129,0.1)]">
              <div className="flex items-center justify-between font-mono">
                <span className="text-[10px] text-emerald-400 uppercase tracking-wider font-bold">PHASE 04</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-bold">DAY 10</span>
              </div>
              <h3 className="text-base font-bold text-zinc-100">Production Handover</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Only after you approve staging performance do you settle the fixed invoice. The pipeline is pushed live to your accounts with a 14-day warranty.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-400 font-semibold">
                ✓ 14-Day Post-Launch SLA
              </div>
            </Card3D>

          </div>

          {/* Staging Summary Callout */}
          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950/80 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <span className="text-zinc-300">
              🔒 <strong className="text-emerald-400">Zero-Risk Contractual Terms:</strong> If the pipeline fails to process your sample data accurately in staging, you owe zero dollars.
            </span>
            <button
              onClick={() => { setFormSubmitted(false); setModalOpen(true); }}
              className="px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors font-bold whitespace-nowrap"
            >
              Initiate Staging Scope →
            </button>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SYSTEMS ARCHITECTURE STUDIO (CASE STUDIES WITH TABS & CODE)          */}
      {/* ==================================================================== */}
      <section id="blueprints" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        <div className="max-w-2xl mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-2">
            <TerminalIcon className="w-4 h-4" />
            Verified Case Studies
          </h2>
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            Systems Architecture Studio
          </p>
          <p className="text-sm text-zinc-400 mt-2">
            Explore battle-tested enterprise blueprints, operational problems solved, live step visualizers, and production-grade Python code.
          </p>
        </div>

        {/* Blueprint Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-zinc-800 pb-4">
          {caseStudies.map((bp, idx) => (
            <button
              key={bp.id}
              onClick={() => {
                setActiveBlueprint(idx);
                setBlueprintTab('flow');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all ${
                activeBlueprint === idx
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-bold'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-transparent'
              }`}
            >
              0{idx + 1}. {bp.category}
            </button>
          ))}
        </div>

        {/* Selected Blueprint Detail Card */}
        {(() => {
          const bp = caseStudies[activeBlueprint];
          return (
            <Card3D className="border border-zinc-800 bg-zinc-900/80 p-6 sm:p-8 space-y-6">
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
                <div>
                  <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">{bp.badge}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mt-1">{bp.title}</h3>
                  <div className="text-xs font-mono text-cyan-400 mt-1">{bp.impact}</div>
                </div>

                <div className="flex gap-2 font-mono text-xs">
                  <button
                    onClick={() => setBlueprintTab('flow')}
                    className={`px-3.5 py-1.5 rounded-lg transition-all ${
                      blueprintTab === 'flow'
                        ? 'bg-zinc-800 text-emerald-400 border border-emerald-500/30'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    System Flow
                  </button>
                  <button
                    onClick={() => setBlueprintTab('code')}
                    className={`px-3.5 py-1.5 rounded-lg transition-all ${
                      blueprintTab === 'code'
                        ? 'bg-zinc-800 text-emerald-400 border border-emerald-500/30'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Python Code
                  </button>
                  <button
                    onClick={() => setBlueprintTab('metrics')}
                    className={`px-3.5 py-1.5 rounded-lg transition-all ${
                      blueprintTab === 'metrics'
                        ? 'bg-zinc-800 text-emerald-400 border border-emerald-500/30'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Client Metrics
                  </button>
                </div>
              </div>

              {/* TAB 1: System Flow & Bottleneck */}
              {blueprintTab === 'flow' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                      <div className="font-mono uppercase text-red-400 font-bold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        The Operational Bottleneck
                      </div>
                      <p className="text-zinc-400 leading-relaxed">{bp.problem}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                      <div className="font-mono uppercase text-emerald-400 font-bold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        The Engineered Architecture
                      </div>
                      <p className="text-zinc-400 leading-relaxed">{bp.solution}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                      Pipeline State Graph
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
                      {bp.flow.map((node) => (
                        <div key={node.stage} className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
                          <div className="text-emerald-400 text-[10px] font-bold">STAGE {node.stage}</div>
                          <div className="font-bold text-zinc-200">{node.name}</div>
                          <div className="text-[11px] text-zinc-400 leading-normal">{node.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: Clean Python/FastAPI Source Code */}
              {blueprintTab === 'code' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>Clean Human Engineering • Zero AI Fluff • Pydantic Schema Guardrails</span>
                    <span className="text-emerald-400 font-semibold">staging_test_suite_passed.py</span>
                  </div>
                  <pre className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 font-mono text-xs overflow-x-auto leading-relaxed shadow-inner">
                    <code>{bp.code}</code>
                  </pre>
                </div>
              )}

              {/* TAB 3: Verified Client Metrics */}
              {blueprintTab === 'metrics' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
                  {bp.metrics.map((m) => (
                    <div key={m.label} className="p-5 rounded-xl bg-zinc-950 border border-zinc-800/80">
                      <div className="text-2xl font-bold font-mono text-cyan-400">{m.value}</div>
                      <div className="text-xs text-zinc-400 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

            </Card3D>
          );
        })()}

      </section>

      {/* ==================================================================== */}
      {/* INTERACTIVE 3D ROI & BOTTLENECK CALCULATOR                           */}
      {/* ==================================================================== */}
      <section id="calculator" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-2">
            <CpuIcon className="w-4 h-4" />
            Interactive Financial Diagnostic
          </h2>
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            Calculate your company's actual payroll leak.
          </p>
          <p className="text-sm text-zinc-400 mt-2">
            Slide your team's metrics below to see how many billable hours and dollars are burned annually on manual tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-10 backdrop-blur">
          
          <div className="lg:col-span-7 space-y-7">
            
            {/* Slider 1: Team Size */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-300">Staff members handling repetitive data entry</span>
                <span className="text-emerald-400 font-bold text-sm">{teamSize} Employees</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="50" 
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                <span>1 solo coordinator</span>
                <span>50-person ops backlog</span>
              </div>
            </div>

            {/* Slider 2: Hours per Week */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-300">Hours spent per person weekly on manual workflows</span>
                <span className="text-emerald-400 font-bold text-sm">{hoursPerPerson} hrs / week</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="20" 
                value={hoursPerPerson}
                onChange={(e) => setHoursPerPerson(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                <span>1 hr (minor lag)</span>
                <span>20 hrs (severe operational drag)</span>
              </div>
            </div>

            {/* Slider 3: Hourly Loaded Cost */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-300">Average US/EU hourly employee loaded payroll cost</span>
                <span className="text-emerald-400 font-bold text-sm">${hourlyWage} / hr</span>
              </div>
              <input 
                type="range" 
                min="25" 
                max="85" 
                value={hourlyWage}
                onChange={(e) => setHourlyWage(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                <span>$25/hr (entry admin)</span>
                <span>$85/hr (senior account manager)</span>
              </div>
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 rounded-2xl border border-zinc-700 bg-zinc-950 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="border-b border-zinc-800 pb-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Annual Payroll Burned</span>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-red-400 mt-1">
                {roi.annualWasteStr}
              </div>
              <span className="text-xs text-zinc-400 mt-1 block">
                {roi.annualHours} hours lost annually in human copy-pasting
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center text-zinc-300">
                <span>Weekly Time Drain:</span>
                <span className="text-zinc-100 font-bold">{roi.weeklyHours} hrs/wk</span>
              </div>
              <div className="flex justify-between items-center text-zinc-300">
                <span>10-Day Sprint Cost:</span>
                <span className="text-emerald-400 font-bold">$1,500 Fixed</span>
              </div>
              <div className="flex justify-between items-center text-zinc-300">
                <span>Investment Payback:</span>
                <span className="text-cyan-400 font-bold">{roi.paybackDays} Days</span>
              </div>
              <div className="flex justify-between items-center text-zinc-300 pt-2 border-t border-zinc-800">
                <span>Net Year-1 Capital Saved:</span>
                <span className="text-emerald-400 font-bold">{roi.netSavingsStr}</span>
              </div>
            </div>

            <button
              onClick={() => { setFormSubmitted(false); setModalOpen(true); }}
              className="w-full py-3 text-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold font-mono text-xs transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)]"
            >
              Reclaim These Hours Now →
            </button>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* TRANSPARENT COMMERCIAL TIERS                                         */}
      {/* ==================================================================== */}
      <section id="pricing" className="relative z-10 py-20 bg-zinc-900/40 border-y border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              Transparent Engagements
            </h2>
            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
              Clear scope. Zero hourly billing games.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* TIER 1: 10-Day Implementation Sprint */}
            <Card3D className="border border-emerald-500/40 bg-zinc-900 p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium mb-4">
                  Recommended for Immediate Impact
                </div>
                <h3 className="text-2xl font-bold text-zinc-100">10-Day Implementation Sprint</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold font-mono text-zinc-100">$1,500 Flat</span>
                  <span className="text-xs text-zinc-400 font-mono">zero upfront risk</span>
                </div>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  Turnkey delivery of a single, mission-critical operational pipeline. Fully tested in staging with custom error handling and guardrails.
                </p>

                <div className="mt-6 space-y-3 font-mono text-xs text-zinc-300">
                  <div className="flex items-center gap-2.5">
                    <CheckIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Complete bottleneck audit &amp; architecture blueprint</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>1 core automated pipeline (Doc parsing or Lead routing)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Pydantic validation layers &amp; backoff retry logic</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Interactive Slack/Teams alerting for edge cases</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>14-day post-launch warranty &amp; live handover call</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <button
                  onClick={() => {
                    setScopingForm({ ...scopingForm, tier: '10-Day Implementation Sprint ($1,500 Flat)' });
                    setFormSubmitted(false);
                    setModalOpen(true);
                  }}
                  className="block w-full py-3.5 text-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold font-mono text-xs transition-colors shadow-lg shadow-emerald-500/20"
                >
                  Book 10-Day Sprint Scope →
                </button>
              </div>
            </Card3D>

            {/* TIER 2: Dedicated Retainer */}
            <Card3D className="border border-zinc-800 bg-zinc-900/70 p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-cyan-500/10 text-cyan-400 text-xs font-mono font-medium mb-4">
                  For Growing Teams &amp; Scale
                </div>
                <h3 className="text-2xl font-bold text-zinc-100">Dedicated Systems Retainer</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold font-mono text-zinc-100">$3,000</span>
                  <span className="text-xs text-zinc-400 font-mono">/ month retainer</span>
                </div>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  Dedicated ongoing systems integration and architecture. Replaces the need to hire a $140,000/yr local US/EU software engineer.
                </p>

                <div className="mt-6 space-y-3 font-mono text-xs text-zinc-300">
                  <div className="flex items-center gap-2.5">
                    <CheckIcon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Up to 2 new complex automation pipelines per month</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckIcon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Continuous 24/7 API health &amp; rate-limit monitoring</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckIcon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Database optimization &amp; state reconciliation checks</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckIcon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Priority same-day Slack bug fixes &amp; upgrades</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckIcon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Bi-weekly operations review &amp; roadmap sync</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <button
                  onClick={() => {
                    setScopingForm({ ...scopingForm, tier: 'Dedicated Systems Retainer ($3,000/mo)' });
                    setFormSubmitted(false);
                    setModalOpen(true);
                  }}
                  className="block w-full py-3.5 text-center rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold font-mono text-xs transition-colors"
                >
                  Discuss Monthly Retainer →
                </button>
              </div>
            </Card3D>

          </div>

          {/* Compliance & Export Badges */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono text-[11px] text-zinc-400">
            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
              🔒 Zero Client PII Stored
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
              ⚡ End-to-End Encrypted Hooks
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
              📄 0% GST Export Compliant
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
              🌐 US ACH / Wise Wire Ready
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* OBJECTION KILLER & ENTERPRISE FAQ MATRIX                             */}
      {/* ==================================================================== */}
      <section id="faq" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            Zero-Doubt FAQ Matrix
          </h2>
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            Straight answers to enterprise questions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-zinc-200 hover:text-emerald-400 transition-colors"
                >
                  <span>{f.q}</span>
                  <div className={`transform transition-transform duration-200 text-zinc-400 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDownIcon className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/80 pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* FINAL CALL TO ACTION                                                 */}
      {/* ==================================================================== */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <Card3D className="border border-emerald-500/30 bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 sm:p-14 space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-100">
            Ready to reclaim 20+ hours of manual busywork every week?
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Submit your primary operational bottleneck. I will analyze your workflow and return a free 60-second video architecture breakdown within 24 hours.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
            <button
              onClick={() => { setFormSubmitted(false); setModalOpen(true); }}
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:scale-[1.02]"
            >
              Book Bottleneck Audit ($0 Staging Risk)
            </button>
            <button
              onClick={handleCopyEmail}
              className="px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 transition-all flex items-center gap-2"
            >
              <MailIcon className="w-4 h-4 text-emerald-400" />
              <span>{copiedEmail ? 'Email Copied!' : 'tamanna4work@gmail.com'}</span>
            </button>
          </div>
        </Card3D>
      </section>

      {/* ==================================================================== */}
      {/* FOOTER                                                               */}
      {/* ==================================================================== */}
      <footer className="relative z-10 border-t border-zinc-900 bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8 text-xs font-mono text-zinc-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-zinc-300 font-bold">Tamanna</span> — Systems &amp; Automation Engineer.
            <div className="text-[11px] text-zinc-400 mt-1">
              B.E. ECE Foundation • Fault-Tolerant Pipelines • US/EU Export Ready
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/tam-stack-spec17" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors flex items-center gap-1.5">
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a href="mailto:tamanna4work@gmail.com" className="hover:text-zinc-300 transition-colors">Email</a>
            <a href="#hero" className="text-emerald-400 hover:underline">Back to Top ↑</a>
          </div>
        </div>
      </footer>

      {/* ==================================================================== */}
      {/* INTERACTIVE AUDIT & SCOPING MODAL                                    */}
      {/* ==================================================================== */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-xl rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100 p-1"
              aria-label="Close Modal"
            >
              ✕
            </button>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-zinc-100">Audit Request Received</h3>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-zinc-200">{scopingForm.name}</strong>. I will review your operational bottleneck and record a custom Loom video architecture breakdown to <strong className="text-zinc-200">{scopingForm.email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="mt-4 px-5 py-2.5 rounded-lg bg-emerald-500 text-zinc-950 font-bold font-mono text-xs hover:bg-emerald-400 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100">Book an Operational Bottleneck Audit</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Describe your manual bottleneck. We test in staging with $0 upfront risk.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-zinc-300">Your Name</label>
                    <input
                      type="text"
                      required
                      value={scopingForm.name}
                      onChange={(e) => setScopingForm({ ...scopingForm, name: e.target.value })}
                      placeholder="e.g. Mark Davis"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 focus:border-emerald-500 focus:outline-none font-mono"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-zinc-300">Corporate Email</label>
                    <input
                      type="email"
                      required
                      value={scopingForm.email}
                      onChange={(e) => setScopingForm({ ...scopingForm, email: e.target.value })}
                      placeholder="e.g. mark@logistics-broker.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 focus:border-emerald-500 focus:outline-none font-mono"
                    />
                  </div>
                </div>

                {/* Tech Stack Multi-Selection Chips */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-zinc-300">
                    Target Tools &amp; Data Stack (Click to select)
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {techStackList.map((t) => {
                      const isSelected = selectedStack.includes(t);
                      return (
                        <button
                          type="button"
                          key={t}
                          onClick={() => handleStackToggle(t)}
                          className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                            isSelected
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 font-semibold'
                              : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
                          }`}
                        >
                          {isSelected ? '✓ ' : ''}{t}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-zinc-300">
                    What manual task is costing your team the most hours?
                  </label>
                  <textarea
                    rows="3"
                    required
                    value={scopingForm.bottleneck}
                    onChange={(e) => setScopingForm({ ...scopingForm, bottleneck: e.target.value })}
                    placeholder="e.g. We have two ops coordinators copying freight invoices from PDF attachments into QuickBooks every morning. Takes 3 hours a day and errors happen..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 focus:border-emerald-500 focus:outline-none font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-zinc-300">Engagement Scope</label>
                  <select
                    value={scopingForm.tier}
                    onChange={(e) => setScopingForm({ ...scopingForm, tier: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 focus:border-emerald-500 focus:outline-none font-mono"
                  >
                    <option>10-Day Implementation Sprint ($1,500 Flat)</option>
                    <option>Dedicated Systems Retainer ($3,000/mo)</option>
                    <option>Custom Enterprise Pipeline Advisory</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold font-mono text-xs transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] flex items-center justify-center gap-2"
                >
                  <span>Submit Diagnostic Request</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>

                <div className="text-[11px] font-mono text-zinc-400 text-center">
                  Zero spam. 100% private. Direct founder-to-engineer review.
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}