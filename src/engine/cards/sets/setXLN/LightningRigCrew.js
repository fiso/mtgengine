"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningRigCrew extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning-Rig Crew", "Ixalan", "XLN");
  }
}

module.exports = LightningRigCrew;
