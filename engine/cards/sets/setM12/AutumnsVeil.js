"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AutumnsVeilBase = require("../setM11/AutumnsVeil.js");

class AutumnsVeil extends AutumnsVeilBase {
  constructor(game) {
    super(game, "Autumn's Veil", "Magic 2012", "M12");
  }
}

module.exports = AutumnsVeil;
