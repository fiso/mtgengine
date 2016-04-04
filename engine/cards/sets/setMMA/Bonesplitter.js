"use strict";
const Constants = require ("../../../Constants");
const BonesplitterBase = require("../setpARL/Bonesplitter");

class Bonesplitter extends BonesplitterBase {
  constructor(game) {
    super(game, "Bonesplitter", "Modern Masters", "MMA");
  }
}

module.exports = Bonesplitter;
