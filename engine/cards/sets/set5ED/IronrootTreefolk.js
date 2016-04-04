"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IronrootTreefolkBase = require("../setCED/IronrootTreefolk.js");

class IronrootTreefolk extends IronrootTreefolkBase {
  constructor(game) {
    super(game, "Ironroot Treefolk", "Fifth Edition", "5ED");
  }
}

module.exports = IronrootTreefolk;
