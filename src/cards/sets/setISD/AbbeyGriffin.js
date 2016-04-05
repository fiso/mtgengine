"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbbeyGriffin extends UnimplementedCard {
  constructor(game) {
    super(game, "Abbey Griffin", "Innistrad", "ISD");
  }
}

module.exports = AbbeyGriffin;
