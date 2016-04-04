"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JungleLionBase = require("../setME3/JungleLion.js");

class JungleLion extends JungleLionBase {
  constructor(game) {
    super(game, "Jungle Lion", "Portal", "POR");
  }
}

module.exports = JungleLion;
