"use strict";
const Constants = require ("../../../Constants");
const HibernationSliverBase = require("../setH09/HibernationSliver");

class HibernationSliver extends HibernationSliverBase {
  constructor (game) {
    super(game, "Hibernation Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = HibernationSliver;
