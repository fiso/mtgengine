"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OjutaisCommand extends UnimplementedCard {
  constructor (game) {
    super(game, "Ojutai's Command", "Dragons of Tarkir", "DTK");
  }
}

module.exports = OjutaisCommand;
