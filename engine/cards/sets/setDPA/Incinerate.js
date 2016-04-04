"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IncinerateBase = require("../setCST/Incinerate.js");

class Incinerate extends IncinerateBase {
  constructor(game) {
    super(game, "Incinerate", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Incinerate;
