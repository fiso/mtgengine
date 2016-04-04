"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GravepurgeBase = require("../setDKA/Gravepurge.js");

class Gravepurge extends GravepurgeBase {
  constructor(game) {
    super(game, "Gravepurge", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Gravepurge;
