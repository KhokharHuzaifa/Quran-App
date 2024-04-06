#include <string>
#include <xercesc/dom/DOM.hpp>
#include <xercesc/parsers/XercesDOMParser.hpp>

using namespace std;
XERCES_CPP_NAMESPACE_USE
 
class DomReader
{
public:
  DomReader();
  ~DomReader();
 
  void readDomFile(std::string&) throw(std::runtime_error);
  
 
private:
  void convertDomToXmlString(DOMNode* domNode, std::string &) throw(std::runtime_error);
  string narrow( const wstring& str );
  xercesc::XercesDOMParser *domFileParser;
};