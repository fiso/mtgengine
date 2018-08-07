"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DromokasCommand extends UnimplementedCard {
  constructor (game) {
    super(game, "Dromoka's Command", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DromokasCommand;
