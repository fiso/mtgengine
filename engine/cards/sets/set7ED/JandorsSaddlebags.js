"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JandorsSaddlebagsBase = require("../setARN/JandorsSaddlebags.js");

class JandorsSaddlebags extends JandorsSaddlebagsBase {
  constructor(game) {
    super(game, "Jandor's Saddlebags", "Seventh Edition", "7ED");
  }
}

module.exports = JandorsSaddlebags;
