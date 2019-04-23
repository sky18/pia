// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('test_writing_on_textarea', () => {
  cy.get(".pia-questionBlock-content").each( ($el, $index, $list) => {
    cy.wrap($el).click();
    $el.find("textarea").val("Nam tincidunt sem vel pretium scelerisque. Aliquam tincidunt commodo magna, vitae rutrum massa. Praesent lobortis porttitor gravida. Fusce nulla libero, feugiat eu sodales at, semper ac diam. Morbi sit amet luctus libero, eu sagittis neque");
    cy.wrap($el).parent().wait(250).click();
    expect($el.find('textarea').val().length > 0).to.be.true;
  });
});
Cypress.Commands.add('test_add_measure', () => {
  cy.get('.btn-white > .pia-icons').click();
  cy.get(".pia-measureBlock-title").each(($el, $index, $list) => {
    cy.wrap($el).click();
    cy.wrap($el).find("textarea").type("Measure 1");
  });
  cy.get(".pia-measureBlock-content").each( ($el, $index, $list) => {
    cy.wrap($el).click();
    $el.find("textarea").val("Nam tincidunt sem vel pretium scelerisque. Aliquam tincidunt commodo magna, vitae rutrum massa. Praesent lobortis porttitor gravida. Fusce nulla libero, feugiat eu sodales at, semper ac diam. Morbi sit amet luctus libero, eu sagittis neque");
    cy.wrap($el).parent().wait(250).click();
    expect($el.find('textarea').val().length > 0).to.be.true;
  });
});
Cypress.Commands.add('test_add_measure_from_sidebar', () => {
  cy.get('.pia-knowledgeBaseBlock-item-definition > .btn').first().click();
  cy.get(".pia-measureBlock-content").each(($el, $index, $list) => {
    $el.find("textarea").val("Nam tincidunt sem vel pretium scelerisque. Aliquam tincidunt commodo magna, vitae rutrum massa. Praesent lobortis porttitor gravida. Fusce nulla libero, feugiat eu sodales at, semper ac diam. Morbi sit amet luctus libero, eu sagittis neque");
    cy.wrap($el).parent().wait(250).click();
  });
});
Cypress.Commands.add('test_add_tags', () => {
  cy.get("tag-input-form").each(($el, $index, $list) => {
    cy.wrap($el)
      .find("input")
      .type("tag-1");
    cy.get('.pia-questionBlock').last().click();
    cy.wrap($el)
      .find("input")
      .type("tag-2");
    cy.get('.pia-questionBlock').last().click();
  }).then(() => {
    cy.get('.pia-questionBlock').last().find("input").click().then( () => {
      cy.get('.ng2-menu-item').first().click();
      cy.get('.ng2-menu-item').first().click();
    })
  })
});
Cypress.Commands.add('test_move_gauges', () => {
  cy.get('.pia-gaugeBlock').each(($el, $index, $list) => {
    cy.wrap($el).find("input").invoke('val', 3).trigger('change');
  });
  cy.get(".pia-questionBlock-content").each(($el, $index, $list) => {
    cy.wrap($el).click();
    $el.find("textarea").val("Nam tincidunt sem vel pretium scelerisque. Aliquam tincidunt commodo magna, vitae rutrum massa. Praesent lobortis porttitor gravida. Fusce nulla libero, feugiat eu sodales at, semper ac diam. Morbi sit amet luctus libero, eu sagittis neque");
    cy.wrap($el).parent().wait(250).click();
  });
});
Cypress.Commands.add('validateEval', () => {
  cy.wait(500).get(".pia-entryContentBlock-footer")
    .find(".btn-green").should('have.class', 'btn-active')
    .click();
});
Cypress.Commands.add('acceptEval', () => {
  cy.get(".pia-evaluationBlock")
    .find(".btn-green")
    .click().then( () => {
    cy.get(".pia-entryContentBlock-footer")
      .find(".btn-green").should('have.class', 'btn-active')
      .click();
  })
});
Cypress.Commands.add('acceptMultipleEval', () => {
  cy
    .get(".pia-evaluationBlock")
    .find(".btn-green")
    .each(($el, $index, $list) => {
      cy
        .wait(500)
        .wrap($el)
        .click().wait(250);
    });
  cy
    .wait(500)
    .get(".pia-entryContentBlock-footer")
    .find(".btn-green").should('have.class', 'btn-active')
    .click();
});
Cypress.Commands.add('closeCompletedValidationEvaluationModal', () => {
  cy
    .wait(500)
    .get("#completed-evaluation")
    .invoke("show")
    .find("button")
    .last()
    .click()
    .wait(500)
});
Cypress.Commands.add('closeValidationEvaluationModal', () => {
  cy
    .wait(500)
    .get("#validate-evaluation")
    .invoke("show")
    .find("button")
    .first()
    .click()
    .wait(500)
});
Cypress.Commands.add('validateModal', () => {
  cy
    .wait(500)
    .get("#ask-for-evaluation")
    .find("button")
    .first()
    .click()
    .wait(500);
});
Cypress.Commands.add('redirectMeasureOnAcceptation', () => {
  const url = "http://localhost:4200/#/entry/3/section/3/item/3";
  cy
    .visit(url);
});
Cypress.Commands.add('validateDPO', () => {
  cy.get(".pia-entryContentBlock-content-DPO").each(($el, $index, $list) => {
    cy.wrap($el).find("input").first().type(("DPO Pia"));
    cy.wrap($el).find(".pia-entryContentBlock-content-DPO-treatment").find("label").first().click();
    cy.wrap($el).find("textarea").type("Nam tincidunt sem vel pretium scelerisque. Aliquam tincidunt commodo magna, vitae rutrum massa. Praesent lobortis porttitor gravida. Fusce nulla libero, feugiat eu sodales at, semper ac diam. Morbi sit amet luctus libero, eu sagittis neque");

  });
  cy.get(".pia-entryContentBlock-content-people").each(($el, $index, $list) => {
    cy.wrap($el).find("form").first().find("label").first().click();
    cy.wrap($el).find("form").last().find("input").first().type(("DPO Pia"));
    cy.wrap($el).find("form").last().find("label").first().click();
    cy.wrap($el).find("form").last().find("textarea").type("Nam tincidunt sem vel pretium scelerisque. Aliquam tincidunt commodo magna, vitae rutrum massa. Praesent lobortis porttitor gravida. Fusce nulla libero, feugiat eu sodales at, semper ac diam. Morbi sit amet luctus libero, eu sagittis neque");
    cy.wrap($el).find("form").parent().click();
  });
});
Cypress.Commands.add('validatePia', () => {
  cy.get('.pia-validatePIABlock').find(".btn-green").should('have.class', 'btn-active').click();
  cy.wait(500).get(".pia-entryContentBlock-content-list-confirm").each(($el, $index, $list) => {
    cy.wrap($el).find("label").click();
  }).then( () => {
    cy.get('#pia-simple-validation').click()
  });
});
Cypress.Commands.add('validateModalComplete', () => {
  cy.wait(500)
    .get("#completed-edition")
    .find("button")
    .first()
    .click()
    .wait(500);
});
