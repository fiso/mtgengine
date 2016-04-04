"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HammerofBogardanBase = require("../set6ED/HammerofBogardan.js");

class HammerofBogardan extends HammerofBogardanBase {
  constructor(game) {
    super(game, "Hammer of Bogardan", "Judge Gift Program", "pJGP");
  }
}

module.exports = HammerofBogardan;
