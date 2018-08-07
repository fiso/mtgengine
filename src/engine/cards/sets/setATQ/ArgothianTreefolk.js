"use strict";
const Constants = require ("../../../Constants");
const ArgothianTreefolkBase = require("../setME4/ArgothianTreefolk");

class ArgothianTreefolk extends ArgothianTreefolkBase {
  constructor (game) {
    super(game, "Argothian Treefolk", "Antiquities", "ATQ");
  }
}

module.exports = ArgothianTreefolk;
