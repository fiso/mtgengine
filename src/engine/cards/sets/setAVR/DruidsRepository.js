"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DruidsRepository extends UnimplementedCard {
  constructor (game) {
    super(game, "Druids' Repository", "Avacyn Restored", "AVR");
  }
}

module.exports = DruidsRepository;
