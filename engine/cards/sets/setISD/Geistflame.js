"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GeistflameBase = require("../setDDK/Geistflame.js");

class Geistflame extends GeistflameBase {
  constructor(game) {
    super(game, "Geistflame", "Innistrad", "ISD");
  }
}

module.exports = Geistflame;
