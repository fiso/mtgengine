"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RoughshodMentorBase = require("../setDPA/RoughshodMentor.js");

class RoughshodMentor extends RoughshodMentorBase {
  constructor(game) {
    super(game, "Roughshod Mentor", "Shadowmoor", "SHM");
  }
}

module.exports = RoughshodMentor;
