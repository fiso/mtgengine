"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UmezawasJitte extends UnimplementedCard {
  constructor(game) {
    super(game, "Umezawa's Jitte", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = UmezawasJitte;
