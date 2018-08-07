"use strict";
const Constants = require ("../../../Constants");
const BonesplitterBase = require("../setMMA/Bonesplitter");

class Bonesplitter extends BonesplitterBase {
  constructor (game) {
    super(game, "Bonesplitter", "Mirrodin", "MRD");
  }
}

module.exports = Bonesplitter;
