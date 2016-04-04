"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlazeBase = require("../set6ED/Blaze.js");

class Blaze extends BlazeBase {
  constructor(game) {
    super(game, "Blaze", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Blaze;
