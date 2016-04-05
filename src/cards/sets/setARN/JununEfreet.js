"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JununEfreet extends UnimplementedCard {
  constructor(game) {
    super(game, "Junún Efreet", "Arabian Nights", "ARN");
  }
}

module.exports = JununEfreet;
