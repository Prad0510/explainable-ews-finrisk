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
| Model    | Features                 | ROC-AUC    |
| -------- | ------------------------ | ---------- |
| Logistic | Raw behavioural features | **0.7192** |
| Logistic | Aggregated EWS score     | **0.7058** |
| Logistic | Combined                 | **0.7192** |

Results show that raw behavioural features achieved ROC-AUC = 0.719, while the aggregated EWS risk score achieved ROC-AUC = 0.706.

Although the aggregated score underperforms slightly, the small performance gap suggests that behavioural risk compression retains most predictive information. This indicates potential for explainable, monitoring-based systems without significant predictive sacrifice.
