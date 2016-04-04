"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JandorsSaddlebagsBase = require("../setARN/JandorsSaddlebags.js");

class JandorsSaddlebags extends JandorsSaddlebagsBase {
  constructor(game) {
    super(game, "Jandor's Saddlebags", "Fourth Edition", "4ED");
  }
}

module.exports = JandorsSaddlebags;
