"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HammerofBogardanBase = require("../set6ED/HammerofBogardan.js");

class HammerofBogardan extends HammerofBogardanBase {
  constructor(game) {
    super(game, "Hammer of Bogardan", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = HammerofBogardan;
