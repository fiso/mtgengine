"use strict";
const Constants = require ("../../../Constants");
const JandorsSaddlebagsBase = require("../setARN/JandorsSaddlebags");

class JandorsSaddlebags extends JandorsSaddlebagsBase {
  constructor (game) {
    super(game, "Jandor's Saddlebags", "Fourth Edition", "4ED");
  }
}

module.exports = JandorsSaddlebags;
