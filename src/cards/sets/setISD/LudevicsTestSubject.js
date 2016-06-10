"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LudevicsTestSubject extends UnimplementedCard {
  constructor (game) {
    super(game, "Ludevic's Test Subject", "Innistrad", "ISD");
  }
}

module.exports = LudevicsTestSubject;
