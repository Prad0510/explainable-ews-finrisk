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

| Feature            | Coefficient  | Odds Ratio  |
| ------------------ | ------------ | ----------- |
| payment_volatility | **0.7633**   | **2.145**   |
| risk_trend_score   | **0.6392**   | **1.895**   |
| liquidity_stress   | **0.000030** | **1.00003** |

Odds ratio analysis reveals behavioural volatility as the dominant risk driver (OR = 2.15), followed by recency-weighted delinquency (OR = 1.90). Liquidity stress exhibited negligible linear influence (OR ≈ 1), indicating behavioural dynamics may precede balance sheet stress in predictive power.

## 2026-02-20

Objective: SHAP Explainability for Gradient Boosting

- Nonlinear modeling via **Gradient Boosting** improved discriminatory power (ROC-AUC = 0.746) relative to logistic regression. Feature importance analysis revealed dominant influence of recency-weighted delinquency (80%), while liquidity stress exhibited modest but non-negligible contribution (8.7%), indicating nonlinear predictive effects undetected in linear modeling.

<img width="807" height="282" alt="image" src="https://github.com/user-attachments/assets/dc609d7f-b3d2-4b22-b9e8-66a0e510e098" />

- SHAP analysis confirms strong monotonic influence of recency-weighted delinquency. Payment volatility exhibits moderate positive impact, while liquidity stress shows limited marginal contribution concentrated near zero. These findings indicate behavioural dynamics dominate early warning prediction in the studied dataset.

- SHAP-based explanation stability was evaluated across five random splits. Feature ranking remained invariant across all experiments, with recency-weighted delinquency consistently dominating, followed by behavioural volatility and liquidity stress. Magnitude variations were minor and did not alter interpretative conclusions, indicating robust explanation stability.
