"use strict";
const Constants = require ("../../../Constants");
const NahiritheHarbingerBase = require("../setSOI/NahiritheHarbinger");

class NahiritheHarbinger extends NahiritheHarbingerBase {
  constructor (game) {
    super(game, "Nahiri, the Harbinger", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = NahiritheHarbinger;
