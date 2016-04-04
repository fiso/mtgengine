"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LightkeeperofEmeriaBase = require("../setCMD/LightkeeperofEmeria.js");

class LightkeeperofEmeria extends LightkeeperofEmeriaBase {
  constructor(game) {
    super(game, "Lightkeeper of Emeria", "Worldwake", "WWK");
  }
}

module.exports = LightkeeperofEmeria;
