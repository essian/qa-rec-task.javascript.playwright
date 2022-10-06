# Test Approach Question

We are going to push changes to the search infrastructure, the functionality should stay the same. In order to ensure we have delivered quality, reliable and stable software what approach should we take?

## Solution

We need to do three things:

1. Understand why the changes are being made and what benefits we're expecting to see. Are there any non-functional requirements here?

2. Analyse and understand existing regression test coverage to develop understanding and identify gaps

3. Write tests for new infrastructure

Part one should give us some insight and context into what we need to test and what the risks are so we can be confident in our test appraoch.

In part two we should be able to define the work that needs to be done. I think we will be able to assume that existing e2e test coverage will not be altered by the changing infrastructure, but I'd like to check this. We should also review smaller tests (e.g. api-level or integration) as these may need to be rewritten to account for the new infrastructure. There is a chance they'll need to be redesigned entirely.

In part three we will need to update tests to reflect the new infrastructure and write new tests for any new features that the infrastructure provides. For example, the new infrastructure could allow results to be cached and we may need tests to validate that that's happening correctly. If we have integration or api level tests that are dependent on the old infrastructure these will need to be updated or rewritten.

In terms of non-functional testing we should consider performance, load and security as they relate to the new infrastructure and ensure that all requirements are met.
