"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GruesomeDeformity extends Card {
  constructor(game) {
    super(game, "Gruesome Deformity", "Innistrad", "ISD");
  }
}

module.exports = GruesomeDeformity;
