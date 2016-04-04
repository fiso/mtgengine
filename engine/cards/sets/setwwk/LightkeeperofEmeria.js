"use strict";
const Constants = require ("../../../Constants");
const LightkeeperofEmeriaBase = require("../setCMD/LightkeeperofEmeria");

class LightkeeperofEmeria extends LightkeeperofEmeriaBase {
  constructor(game) {
    super(game, "Lightkeeper of Emeria", "Worldwake", "WWK");
  }
}

module.exports = LightkeeperofEmeria;
