"use strict";
const Constants = require ("../../../Constants");
const BonesplitterBase = require("../setMMA/Bonesplitter");

class Bonesplitter extends BonesplitterBase {
  constructor (game) {
    super(game, "Bonesplitter", "Arena League 2003", "PAL03");
  }
}

module.exports = Bonesplitter;
