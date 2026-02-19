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

## 2026-02-19
## Experiment 1: Feature Aggregation Validation

Objective:
To evaluate whether manually constructed EWS risk score performs comparably to raw behavioural features.
| Model              | Features                 | ROC-AUC    |
| ------------------ | ------------------------ | ---------- |
| Logistic Regression| Raw behavioural features | **0.7192** |
| Logistic Regression| Aggregated EWS score     | **0.7058** |
| Logistic Regression| Combined                 | **0.7192** |

Results show that raw behavioural features achieved ROC-AUC = 0.719, while the aggregated EWS risk score achieved ROC-AUC = 0.706.

Although the aggregated score underperforms slightly, the small performance gap suggests that behavioural risk compression retains most predictive information. This indicates potential for explainable, monitoring-based systems without significant predictive sacrifice.

Stability Results on Raw Behaviour Features
| Seed | ROC-AUC |
| ---- | ------- |
| 1    | 0.7209  |
| 10   | 0.7236  |
| 25   | 0.7350  |
| 42   | 0.7192  |
| 100  | 0.7348  |

Stability analysis across five random splits produced ROC-AUC values between 0.719 and 0.735 (mean ≈ 0.727), indicating low variance and consistent predictive performance of behavioural EWS features.

## Experiment 2: Logistic Regression explainability

| Feature            | Coefficient  | Odds Ratio  | Meaning               |
| ------------------ | ------------ | ----------- | --------------------- |
| payment_volatility | **0.7633**   | **2.145**   | 114% increase in odds |
| risk_trend_score   | **0.6392**   | **1.895**   | 89% increase in odds  |
| liquidity_stress   | **0.000030** | **1.00003** | ~0% increase          |

Odds ratio analysis reveals behavioural volatility as the dominant risk driver (OR = 2.15), followed by recency-weighted delinquency (OR = 1.90). Liquidity stress exhibited negligible linear influence (OR ≈ 1), indicating behavioural dynamics may precede balance sheet stress in predictive power.
