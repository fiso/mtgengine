"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BonesplitterBase = require("../setpARL/Bonesplitter.js");

class Bonesplitter extends BonesplitterBase {
  constructor(game) {
    super(game, "Bonesplitter", "Modern Masters", "MMA");
  }
}

module.exports = Bonesplitter;
