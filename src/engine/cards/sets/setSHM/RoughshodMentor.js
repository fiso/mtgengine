"use strict";
const Constants = require ("../../../Constants");
const RoughshodMentorBase = require("../setDPA/RoughshodMentor");

class RoughshodMentor extends RoughshodMentorBase {
  constructor (game) {
    super(game, "Roughshod Mentor", "Shadowmoor", "SHM");
  }
}

module.exports = RoughshodMentor;
