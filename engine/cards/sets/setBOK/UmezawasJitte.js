"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UmezawasJitte extends Card {
  constructor(game) {
    super(game, "Umezawa's Jitte", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = UmezawasJitte;
