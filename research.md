## Research Hypothesis
Behavioural repayment history can generate explainable early warning signals without application-time features.

## 2026-02-17
- Created risk trend score using weighted recent payment delays to simulate early behavioural risk accumulation.
- PAY_0 seems to dominate risk trend.
- Older payment history has weaker impact.

## 2026-02-18
- Created payment_volatility feature using standard deviation across historical payment statuses to capture behavioural instability as an early warning indicator.
- Engineered liquidity_stress feature to represent repayment pressure by comparing cumulative billed amounts against repayments.
- Constructed continuous EWS risk score by combining normalized behavioural trend, payment volatility, and liquidity stress features to simulate dynamic risk monitoring.
