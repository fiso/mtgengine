"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DawnGryff extends UnimplementedCard {
  constructor (game) {
    super(game, "Dawn Gryff", "Eldritch Moon", "EMN");
  }
}

module.exports = DawnGryff;
