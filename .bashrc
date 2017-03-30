echo Hello this bash has been configured for Cornell Cup. Remember to use cup-identify now to say who you are. For example:
echo cup-identify Trevor\\ Edwards tre23@cornell.edu
ident='You are currently identified as: '"$(git config --global user.name)"' <'"$(git config --global user.email)"'>'
echo $ident

PATH=$PATH:~/cs-core/tools
export PATH

alias ..='cd ..'
alias ...='cd ../..'
