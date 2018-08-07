"use strict";
const Constants = require ("../../../Constants");
const LightkeeperofEmeriaBase = require("../setCMA/LightkeeperofEmeria");

class LightkeeperofEmeria extends LightkeeperofEmeriaBase {
  constructor (game) {
    super(game, "Lightkeeper of Emeria", "Commander 2011", "CMD");
  }
}

module.exports = LightkeeperofEmeria;
