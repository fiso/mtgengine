"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SparefromEvil extends UnimplementedCard {
  constructor (game) {
    super(game, "Spare from Evil", "Innistrad", "ISD");
  }
}

module.exports = SparefromEvil;
