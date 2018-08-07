"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GruesomeDeformity extends UnimplementedCard {
  constructor (game) {
    super(game, "Gruesome Deformity", "Innistrad", "ISD");
  }
}

module.exports = GruesomeDeformity;
