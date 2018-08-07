"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AzoriusCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Azorius Charm", "Iconic Masters", "IMA");
  }
}

module.exports = AzoriusCharm;
