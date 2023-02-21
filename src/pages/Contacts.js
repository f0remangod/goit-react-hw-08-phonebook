import { Helmet } from 'react-helmet';
import { Section } from 'components/Section/Section';
import { PhonebookForm } from 'components/PhonebookComponents/PhonebookForm/PhonebookForm';
import { TailSpin } from 'react-loader-spinner';
import { Filter } from 'components/PhonebookComponents/Filter/Filter';
import { ContactsList } from 'components/PhonebookComponents/ContactsList/ContactsList';
import { useGetContactsQuery } from '../redux/contactsSlice';

export default function Contacts() {
  const { data, error, isLoading } = useGetContactsQuery();

  return (
    <>
      <Helmet>
        <title>PHONEBOOK</title>
      </Helmet>
      <Section title="Add new contact">
        <PhonebookForm />
      </Section>

      {isLoading && (
        <Section>
          <TailSpin
            height="380"
            width="380"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Section>
      )}
      {error && (
        <Section>
          <p>Oops, soomething went wrong</p>
        </Section>
      )}
      {!isLoading && !error && data.length > 0 && (
        <>
          <Section title="Filter contacts">
            <Filter />
          </Section>

          <Section title="Saved contacts">
            <ContactsList />
          </Section>
        </>
      )}
      {!isLoading && !error && data.length === 0 && (
        <Section>
          <p>There are no saved contacts</p>
        </Section>
      )}
    </>
  );
}
