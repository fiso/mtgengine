"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuskdaleWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Duskdale Wurm", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = DuskdaleWurm;
