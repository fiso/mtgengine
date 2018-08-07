"use strict";
const Constants = require ("../../../Constants");
const PythonBase = require("../setS00/Python");

class Python extends PythonBase {
  constructor (game) {
    super(game, "Python", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Python;
