"use strict";
const Constants = require ("../../../Constants");
const JandorsSaddlebagsBase = require("../setARN/JandorsSaddlebags");

class JandorsSaddlebags extends JandorsSaddlebagsBase {
  constructor (game) {
    super(game, "Jandor's Saddlebags", "Revised Edition", "3ED");
  }
}

module.exports = JandorsSaddlebags;
