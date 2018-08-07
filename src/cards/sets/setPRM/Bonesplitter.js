"use strict";
const Constants = require ("../../../Constants");
const BonesplitterBase = require("../setMMA/Bonesplitter");

class Bonesplitter extends BonesplitterBase {
  constructor (game) {
    super(game, "Bonesplitter", "Magic Online Promos", "PRM");
  }
}

module.exports = Bonesplitter;
